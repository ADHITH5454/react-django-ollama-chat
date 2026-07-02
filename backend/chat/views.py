from rest_framework.decorators import api_view
from rest_framework.response import Response

from .services import ask_llm


@api_view(["POST"])
def chat(request):

    message = request.data.get("message")

    reply = ask_llm(message)

    return Response({
        "reply": reply
    })