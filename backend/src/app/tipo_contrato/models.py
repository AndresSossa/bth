from django.db import models

class tipoContratoModel(models.Model):
    id_tipo_contrato = models.AutoField(db_column='Id_tipo_contrato', primary_key=True)  # Field name made lowercase.
    tipo_contrato = models.CharField(db_column='Tipo_contrato', max_length=45)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_tipo_contrato'