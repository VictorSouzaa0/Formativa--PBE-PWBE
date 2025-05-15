from django.urls import path
from .views import (
    ProfessorListCreateView, ProfessorRetrieveUpdateDestroyView,
    DisciplinaListCreateView, DisciplinaRetrieveUpdateDestroyView,
    ReservaListCreateView, ReservaRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('professores/', ProfessorListCreateView.as_view(), name='professor-list-create'),
    path('professores/<int:pk>/', ProfessorRetrieveUpdateDestroyView.as_view(), name='professor-detail'),

    path('disciplinas/', DisciplinaListCreateView.as_view(), name='disciplina-list-create'),
    path('disciplinas/<int:pk>/', DisciplinaRetrieveUpdateDestroyView.as_view(), name='disciplina-detail'),

    path('reservas/', ReservaListCreateView.as_view(), name='reserva-list-create'),
    path('reservas/<int:pk>/', ReservaRetrieveUpdateDestroyView.as_view(), name='reserva-detail'),
]
