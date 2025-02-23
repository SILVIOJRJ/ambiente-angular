import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title: string = 'Gerenciador de Tarefas'; // Título do aplicativo
  totalTasks: number = 0; // Total de tarefas
  mostrarTarefas: boolean = true; // Controla a exibição da lista de tarefas
  nomeTarefa: string = ''; // Captura o nome da nova tarefa
  tarefas: { nome: string, concluida: boolean }[] = []; // Lista de tarefas

  // Função para adicionar nova tarefa
  adicionarTarefa(): void {
    if (this.nomeTarefa.trim()) {
      this.tarefas.push({ nome: this.nomeTarefa, concluida: false });
      this.nomeTarefa = ''; // Limpa o campo após adicionar
      this.totalTasks = this.tarefas.length;
    }
  }

  // Função para marcar tarefa como concluída
  marcarConcluida(tarefa: any): void {
    tarefa.concluida = !tarefa.concluida;
  }

  // Função para alternar a visibilidade da lista
  alternarVisibilidade(): void {
    this.mostrarTarefas = !this.mostrarTarefas;
  }
}
