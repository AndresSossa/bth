from django.db import models

# Create your models here.

class modelEps(models.Model):
    id_eps = models.AutoField(db_column='Id_eps', primary_key=True)  # Field name made lowercase.
    codigo_eps = models.CharField(db_column='Codigo_eps', max_length=50)  # Field name made lowercase.
    nit_eps = models.IntegerField(db_column='Nit_eps')  # Field name made lowercase.
    razon_social = models.CharField(db_column='Razon_Social', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_eps'

