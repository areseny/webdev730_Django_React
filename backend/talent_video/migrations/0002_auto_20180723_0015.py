# Generated by Django 2.0.2 on 2018-07-23 00:15

from django.db import migrations
import s3upload.fields


class Migration(migrations.Migration):

    dependencies = [
        ('talent_video', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='talentvideo',
            name='file',
            field=s3upload.fields.S3UploadField(dest='custom_filename'),
        ),
    ]