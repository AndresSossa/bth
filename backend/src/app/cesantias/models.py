from django.db import models

class ModelCesantias(models.Model):
    id_ces = models.AutoField(db_column='Id_ces', primary_key=True)  # Field name made lowercase.
    tipo_ces = models.CharField(db_column='Tipo_ces', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_cesantias'
