# Generated by Django 2.0.5 on 2018-12-03 21:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sub_skill', '0014_auto_20181203_0054'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subskill',
            name='download_video_link',
        ),
    ]
