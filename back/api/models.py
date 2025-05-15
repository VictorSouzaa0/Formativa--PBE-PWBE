from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_professor = models.BooleanField(default=False)
    complete_name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.complete_name}'
    
class Disciplina(models.Model):
    nome = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    carga_horaria = models.IntegerField()
    descricao = models.TextField(blank=True)
    professor = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='disciplinas')

class ReservaAmbiente(models.Model):
    data_inicio = models.DateField()
    data_termino = models.DateField()
    periodo_choices = [('Manha', 'Manhã'), ('Tarde', 'Tarde'), ('Noite', 'Noite')]
    periodo = models.CharField(max_length=10, choices=periodo_choices)
    sala = models.CharField(max_length=50)
    professor = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='reservas')
    disciplina = models.ForeignKey(Disciplina, on_delete=models.CASCADE, related_name='reservas')