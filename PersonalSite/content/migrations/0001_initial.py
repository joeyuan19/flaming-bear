# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Project'
        db.create_table(u'content_project', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(default='', max_length=128, null=True, blank=True)),
            ('body', self.gf('django.db.models.fields.TextField')(default='', null=True, blank=True)),
            ('preview', self.gf('django.db.models.fields.files.ImageField')(default=None, max_length=100, null=True, blank=True)),
            ('rel_date', self.gf('django.db.models.fields.CharField')(default='', max_length=128, null=True, blank=True)),
            ('url', self.gf('django.db.models.fields.URLField')(default='', max_length=128, null=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateField')(blank=True)),
            ('org_key', self.gf('django.db.models.fields.IntegerField')(default=0, blank=True)),
        ))
        db.send_create_signal(u'content', ['Project'])

        # Adding model 'ProjectCategory'
        db.create_table(u'content_projectcategory', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=64)),
            ('org_key', self.gf('django.db.models.fields.IntegerField')(default=0, blank=True)),
        ))
        db.send_create_signal(u'content', ['ProjectCategory'])

        # Adding M2M table for field entries on 'ProjectCategory'
        m2m_table_name = db.shorten_name(u'content_projectcategory_entries')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('projectcategory', models.ForeignKey(orm[u'content.projectcategory'], null=False)),
            ('project', models.ForeignKey(orm[u'content.project'], null=False))
        ))
        db.create_unique(m2m_table_name, ['projectcategory_id', 'project_id'])

        # Adding model 'Contact'
        db.create_table(u'content_contact', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
        ))
        db.send_create_signal(u'content', ['Contact'])

        # Adding model 'Resume'
        db.create_table(u'content_resume', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(default='', max_length=128, null=True, blank=True)),
            ('description', self.gf('django.db.models.fields.TextField')(default='', null=True, blank=True)),
            ('relevent_dates', self.gf('django.db.models.fields.CharField')(default='', max_length=128, null=True, blank=True)),
            ('sort_date', self.gf('django.db.models.fields.DateTimeField')(default=datetime.datetime(2014, 4, 9, 0, 0), blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(blank=True)),
        ))
        db.send_create_signal(u'content', ['Resume'])

        # Adding model 'ResumeCategory'
        db.create_table(u'content_resumecategory', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('title', self.gf('django.db.models.fields.CharField')(max_length=64)),
            ('org_key', self.gf('django.db.models.fields.IntegerField')(default=0, blank=True)),
        ))
        db.send_create_signal(u'content', ['ResumeCategory'])

        # Adding M2M table for field entries on 'ResumeCategory'
        m2m_table_name = db.shorten_name(u'content_resumecategory_entries')
        db.create_table(m2m_table_name, (
            ('id', models.AutoField(verbose_name='ID', primary_key=True, auto_created=True)),
            ('resumecategory', models.ForeignKey(orm[u'content.resumecategory'], null=False)),
            ('resume', models.ForeignKey(orm[u'content.resume'], null=False))
        ))
        db.create_unique(m2m_table_name, ['resumecategory_id', 'resume_id'])

        # Adding model 'Friend'
        db.create_table(u'content_friend', (
            (u'id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('name', self.gf('django.db.models.fields.CharField')(default='', max_length=64, null=True, blank=True)),
            ('title', self.gf('django.db.models.fields.CharField')(default='', max_length=128, null=True, blank=True)),
            ('Description', self.gf('django.db.models.fields.CharField')(default='', max_length=256, null=True, blank=True)),
            ('url', self.gf('django.db.models.fields.URLField')(default='', max_length=128, null=True, blank=True)),
            ('modified', self.gf('django.db.models.fields.DateTimeField')(blank=True)),
            ('org_key', self.gf('django.db.models.fields.IntegerField')(default=0, blank=True)),
        ))
        db.send_create_signal(u'content', ['Friend'])


    def backwards(self, orm):
        # Deleting model 'Project'
        db.delete_table(u'content_project')

        # Deleting model 'ProjectCategory'
        db.delete_table(u'content_projectcategory')

        # Removing M2M table for field entries on 'ProjectCategory'
        db.delete_table(db.shorten_name(u'content_projectcategory_entries'))

        # Deleting model 'Contact'
        db.delete_table(u'content_contact')

        # Deleting model 'Resume'
        db.delete_table(u'content_resume')

        # Deleting model 'ResumeCategory'
        db.delete_table(u'content_resumecategory')

        # Removing M2M table for field entries on 'ResumeCategory'
        db.delete_table(db.shorten_name(u'content_resumecategory_entries'))

        # Deleting model 'Friend'
        db.delete_table(u'content_friend')


    models = {
        u'content.contact': {
            'Meta': {'object_name': 'Contact'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'})
        },
        u'content.friend': {
            'Description': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '256', 'null': 'True', 'blank': 'True'}),
            'Meta': {'object_name': 'Friend'},
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'blank': 'True'}),
            'name': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '64', 'null': 'True', 'blank': 'True'}),
            'org_key': ('django.db.models.fields.IntegerField', [], {'default': '0', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'}),
            'url': ('django.db.models.fields.URLField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'})
        },
        u'content.project': {
            'Meta': {'object_name': 'Project'},
            'body': ('django.db.models.fields.TextField', [], {'default': "''", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateField', [], {'blank': 'True'}),
            'org_key': ('django.db.models.fields.IntegerField', [], {'default': '0', 'blank': 'True'}),
            'preview': ('django.db.models.fields.files.ImageField', [], {'default': 'None', 'max_length': '100', 'null': 'True', 'blank': 'True'}),
            'rel_date': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'}),
            'url': ('django.db.models.fields.URLField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'})
        },
        u'content.projectcategory': {
            'Meta': {'object_name': 'ProjectCategory'},
            'entries': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['content.Project']", 'symmetrical': 'False', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'org_key': ('django.db.models.fields.IntegerField', [], {'default': '0', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '64'})
        },
        u'content.resume': {
            'Meta': {'object_name': 'Resume'},
            'description': ('django.db.models.fields.TextField', [], {'default': "''", 'null': 'True', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'modified': ('django.db.models.fields.DateTimeField', [], {'blank': 'True'}),
            'relevent_dates': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'}),
            'sort_date': ('django.db.models.fields.DateTimeField', [], {'default': 'datetime.datetime(2014, 4, 9, 0, 0)', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'default': "''", 'max_length': '128', 'null': 'True', 'blank': 'True'})
        },
        u'content.resumecategory': {
            'Meta': {'object_name': 'ResumeCategory'},
            'entries': ('django.db.models.fields.related.ManyToManyField', [], {'to': u"orm['content.Resume']", 'symmetrical': 'False', 'blank': 'True'}),
            u'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'org_key': ('django.db.models.fields.IntegerField', [], {'default': '0', 'blank': 'True'}),
            'title': ('django.db.models.fields.CharField', [], {'max_length': '64'})
        }
    }

    complete_apps = ['content']