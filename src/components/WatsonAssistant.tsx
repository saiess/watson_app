import { useEffect } from 'react';
import { OutfitsDataType } from '../types/outfitsDataType';

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

interface WatsonAssistantProps {
  setUserPreferences: (preferences: OutfitsDataType) => void;
}

const WatsonAssistant = ({ setUserPreferences }: WatsonAssistantProps) => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "668533c2-b81c-4ae9-af2f-ca134dbd0577",
      region: "au-syd",
      serviceInstanceID: "f09894d0-ccb4-4359-8e01-abd531155b81",
      onLoad: async (instance: any) => {
        await instance.render();

        instance.on({
          type: 'receive', handler: (event: any) => {
            const skillVariables = event.data.context.skills["actions skill"].skill_variables;
            const skillVariablesLength = Object.keys(skillVariables).length;

            if (skillVariablesLength === 9) {
              setUserPreferences({ ...skillVariables });

              setTimeout(() => {
                instance.restartConversation();
              }, 1000);

              console.log("Conversation has been cleared.");
            } else {
              console.log("skillVariables length is not 9.");
            }

            console.log("Length of skill_variables object:", skillVariablesLength);
          }
        });
      }
    };

    const script = document.createElement('script');
    script.src = 'https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [setUserPreferences]);

  return (
    <div>
      {/* Optionally, you can add a container or placeholder for the chat window */}
    </div>
  );
};

export default WatsonAssistant;
