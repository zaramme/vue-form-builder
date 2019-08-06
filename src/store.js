import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    default:{
        "uuid": "ed0906ee-482b-41dd-bcb0-ab17608d084e",
        "type": "form",
        "items": [
          {
            "uuid": "ba3ca80d-549e-4e0d-b7eb-58300f011c34",
            "type": "page",
            "title": "First Page",
            "items": [
              {
                "uuid": "db8a01e6-7308-48fc-8728-4a60933ac757",
                "title": "How old are you?",
                "type": "question",
                "response_type": "number"
              },
              {
                "type": "question",
                "title": "What is your name?",
                "uuid": "2bb55331-9324-40cb-8205-b382c757cf15"
              },
              {
                "type": "section",
                "title": "Important Section",
                "uuid": "38a92c85-4028-41c8-ab15-ad24f97cf33e",
                "items": [
                  {
                    "uuid": "85211c02-0f39-4a31-a5a9-48c3a3b5d125",
                    "title": "What do you want?",
                    "type": "question",
                    "response_type": "text"
                  },
                  {
                    "type": "question",
                    "title": "How much of that do you want?",
                    "uuid": "2ce4f3db-1cea-4219-8e8b-b9276436d130",
                    "response_type": "number"
                  },
                  {
                    "type": "section",
                    "title": "Even More Important Section",
                    "uuid": "4b196700-a3d4-4f5d-b0a1-0b7dc575e5e9",
                    "items": [
                      {
                        "uuid": "d45a31a7-801c-4a9a-8c71-5b5f5656a155",
                        "title": "How much do you have?",
                        "type": "question",
                        "response_type": "number"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "page",
            "title": "Second Page",
            "uuid": "2785bae2-9e44-412c-aa7e-da802acf9ea5",
            "items": [
              {
                "uuid": "3e7fff9a-22c5-4d03-a844-bd496d8839ba",
                "title": "A less important question",
                "type": "question",
                "response_type": "text"
              },
              {
                "type": "question",
                "title": "And another",
                "uuid": "e85b2b4e-f12a-4a4d-a7c2-d19fec8209b4",
                "response_type": "number"
              }
            ]
          }
        ]
      }
  }
})