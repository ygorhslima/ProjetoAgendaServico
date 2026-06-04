/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
    criando um hook genérico que será base para os outros hooks
*/
"use client";

import { useEffect, useState } from "react";

interface CrudService<T> {
  getAll: () => Promise<T[]>;
  delete: (id: number) => Promise<any>;
  update: (id: number, data: Partial<T>) => Promise<boolean | Response>;
  create: (data: Omit<T, "id">) => Promise<any>;
}

interface UseGenericCrudOptions<T> {
  service: CrudService<T>;
  searchTerm: string;
  filterFn: (item: T, term: string) => boolean;
  entityName: string;
}

export function useGenericCrud<T extends { id: number }>({
  service,
  searchTerm,
  filterFn,
  entityName,
}: UseGenericCrudOptions<T>) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const result = await service.getAll();
      setData(result || []);
    } catch (error) {
      console.error(`Erro ao buscar dados de ${entityName}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = data.filter((item) => {
    const term = (searchTerm || "").toLowerCase();
    return filterFn(item, term);
  });

  const deleteItem = async (id: number): Promise<void> => {
    const confirmacao = window.confirm(
      `Tem certeza que deseja remover este ${entityName} da tabela?`,
    );

    if (!confirmacao) {
      return;
    }

    try {
      await service.delete(id);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(`Erro ao remover um ${entityName}`, error);
      alert(`Não foi possível excluir o ${entityName}`);
    }
  };

  const updateItem = async (id: number, dadosAtualizados: Partial<T>) => {
    try {
      const result = await service.update(
        id,
        dadosAtualizados,
      );

      // Verifica se o resultado é um Response (checa .ok) ou um booleano direto
      const isSuccess = result instanceof Response ? result.ok : !!result;

      if (isSuccess) {
        await loadData();
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Erro ao editar ${entityName}:`, error);
      alert(`Erro ao editar ${entityName}`);
      return false;
    }
  };

  const createItem = async (newItem: Omit<T, "id">) => {
    try {
      setLoading(true);
      const responseCreate = await service.create(newItem);

      if (responseCreate) {
        await loadData();
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Erro ao criar ${entityName}: `, error);
      window.alert(`Erro ao criar ${entityName}`);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    filteredData,
    loading,
    deleteItem,
    updateItem,
    createItem,
    reload: loadData,
    setData,
  };
}
