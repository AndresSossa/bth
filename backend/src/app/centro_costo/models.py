from django.db import models

class centroCostoModels(models.Model):
    id_centro_costo = models.AutoField(db_column='Id_centro_costo', primary_key=True)  # Field name made lowercase.
    centro_costo = models.CharField(db_column='Centro_costo', max_length=45)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_centro_costo'