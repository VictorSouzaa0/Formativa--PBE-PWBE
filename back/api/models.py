from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    is_professor = models.BooleanField(default=False)
    complete_name = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.complete_name}'