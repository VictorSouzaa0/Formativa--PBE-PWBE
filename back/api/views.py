from rest_framework import generics, permissions
from .models import CustomUser, Disciplina, ReservaAmbiente
from .serializers import CustomUserSerializer, DisciplinaSerializer, ReservaAmbienteSerializer
from .permissons import IsGestorOrReadOnly


class ProfessorListCreateView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.filter(is_professor=True)
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]

class ProfessorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CustomUser.objects.filter(is_professor=True)
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]


class DisciplinaListCreateView(generics.ListCreateAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]

class DisciplinaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disciplina.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]


class ReservaListCreateView(generics.ListCreateAPIView):
    queryset = ReservaAmbiente.objects.all()
    serializer_class = ReservaAmbienteSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]

class ReservaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReservaAmbiente.objects.all()
    serializer_class = ReservaAmbienteSerializer
    permission_classes = [permissions.IsAuthenticated, IsGestorOrReadOnly]
