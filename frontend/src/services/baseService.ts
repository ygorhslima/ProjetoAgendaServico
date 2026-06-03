/* eslint-disable @typescript-eslint/no-explicit-any */
export class BaseService {
  public baseUrl: string;

  constructor(endpoint: string) {
    this.baseUrl = endpoint;
  }

  async getAll(): Promise<any> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error("Erro ao buscar os dados");
    return await response.json();
  }

  async delete(id: number): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/${id}`, { method: "DELETE" });
    return response.ok;
  }

  async create(dados: any): Promise<boolean> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    return response.ok;
  }

  async update(id: number, dadosAtualizados: any): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dadosAtualizados),
    });
    return response.ok;
  }
}
