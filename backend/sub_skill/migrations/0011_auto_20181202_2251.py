# Generated by Django 2.0.5 on 2018-12-02 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub_skill', '0010_auto_20181202_2251'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subskill',
            name='video_audition_button_title',
            field=models.CharField(blank=True, default='', max_length=100),
        ),
    ]
