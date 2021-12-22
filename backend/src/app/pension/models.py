from django.db import models

class pensionModel(models.Model):
    id_pens = models.AutoField(db_column='Id_pens', primary_key=True)  # Field name made lowercase.
    codigo_pens = models.CharField(db_column='Codigo_pens', max_length=50)  # Field name made lowercase.
    nit_pens = models.IntegerField(db_column='Nit_pens')  # Field name made lowercase.
    razon_social = models.CharField(db_column='Razon_Social', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_pensiones'