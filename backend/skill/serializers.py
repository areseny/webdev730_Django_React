from rest_framework import serializers
from skill.models import Skill
from sub_skill.serializers import SubSkillSerializer
from position_type.serializers import PositionTypeNameSerializer


class SkillSerializer(serializers.ModelSerializer):
    # sub_skills = serializers.SlugRelatedField(
    #     many=True,
    #     read_only=True,
    #     slug_field='name'
    # )
    sub_skills = SubSkillSerializer(many=True)
    related_position_type = serializers.SlugRelatedField(
        many=False,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Skill
        fields = (
            'id',
            'name',
            'priority',
            'multi_selection',
            'related_position_type',
            'select_option_title',
            'wizard_button_title',
            'video_audition_button_title',
            'question',
            'description',
            'sub_skills'
        )
