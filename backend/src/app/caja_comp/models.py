from django.db import models

# Create your models here.
class cajaCompModel(models.Model):
    id_caja_comp = models.AutoField(db_column='Id_caja_comp', primary_key=True)  # Field name made lowercase.
    codigo = models.CharField(db_column='Codigo', max_length=45)  # Field name made lowercase.
    nit = models.IntegerField(db_column='NIT')  # Field name made lowercase.
    razon_social = models.CharField(db_column='Razon_social', max_length=45)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_caja_comp'