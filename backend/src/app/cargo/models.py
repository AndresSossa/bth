from django.db import models

class CargoModels(models.Model):
    id_cargo = models.AutoField(db_column='Id_cargo', primary_key=True)  # Field name made lowercase.
    nombre_cargo = models.CharField(db_column='Nombre_cargo', max_length=45)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_cargo'
