import React, { useEffect } from 'react';

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

const WatsonAssistantWidget: React.FC = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "abf792fd-2944-4827-b640-0215a84334c0",
      region: "eu-gb",
      serviceInstanceID: "64ecdfcd-8cb8-4076-ae79-94929e1087c6",
      onLoad: async (instance: any) => {
        await instance.render();

        const res = instance
        console.log('Message input element:', res);
        
        // Listen for messages from Watson Assistant
        // res((response: any) => {
        //   console.log(response, 'response');
          
        //   const { message } = response.data;

        //   if (message.input.text.toLowerCase().includes('show something')) {
        //     displaySomething();
        //   }
        // });
      }
    };

    const script = document.createElement('script');
    script.src = `https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js`;
    script.setAttribute('async', '');
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const displaySomething = () => {
    // Example function to display something when the user triggers it
    alert('Displaying something based on user response!');
  };

  return (
    <div>
      {/* Optionally, you can add a container or placeholder for the chat window */}
    </div>
  );
};

export default WatsonAssistantWidget;
