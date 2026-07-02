from ollama import chat


def ask_llm(message):
    response = chat(
        model="llama3.2",
        messages=[
            {
                "role": "user",
                "content": message
            }
        ]
    )

    return response["message"]["content"]