from rest_framework import serializers
from position_sub_type.models import PositionSubType


class WizardPositionSubTypeSerializer(serializers.ModelSerializer):
    position_type = serializers.SlugRelatedField(many=False, read_only=True, slug_field='name')

    class Meta:
        model = PositionSubType
        fields = (
            'id',
            'name',
            'priority',
            'position_type',
            'wizard_button_title',
            'select_option_title',
        )
