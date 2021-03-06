1 C:\workspaces\bth\backend\config
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class TbCargo(models.Model):
    id_cargo = models.AutoField(db_column='Id_cargo', primary_key=True)  # Field name made lowercase.
    nombre_cargo = models.CharField(db_column='Nombre_cargo', max_length=45)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_cargo'


class TbCesantias(models.Model):
    id_ces = models.AutoField(db_column='Id_ces', primary_key=True)  # Field name made lowercase.
    tipo_ces = models.CharField(db_column='Tipo_ces', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_cesantias'


class TbEps(models.Model):
    id_eps = models.AutoField(db_column='Id_eps', primary_key=True)  # Field name made lowercase.
    codigo_eps = models.CharField(db_column='Codigo_eps', max_length=50)  # Field name made lowercase.
    nit_eps = models.IntegerField(db_column='Nit_eps')  # Field name made lowercase.
    razon_social = models.CharField(db_column='Razon_Social', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_eps'


class TbPensiones(models.Model):
    id_pens = models.AutoField(db_column='Id_pens', primary_key=True)  # Field name made lowercase.
    codigo_pens = models.CharField(db_column='Codigo_pens', max_length=50)  # Field name made lowercase.
    nit_pens = models.IntegerField(db_column='Nit_pens')  # Field name made lowercase.
    razon_social = models.CharField(db_column='Razon_Social', max_length=50)  # Field name made lowercase.
    usuario_actualiza = models.CharField(db_column='Usuario_actualiza', max_length=45, blank=True, null=True)  # Field name made lowercase.
    fecha_ingreso = models.DateTimeField(db_column='Fecha_ingreso', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tb_pensiones'
