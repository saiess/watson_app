import { useEffect } from 'react';
declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}
const WatsonAssistant = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
     /* integrationID: "abf792fd-2944-4827-b640-0215a84334c0",
      region: "eu-gb",
      serviceInstanceID: "64ecdfcd-8cb8-4076-ae79-94929e1087c6",*/
    integrationID: "668533c2-b81c-4ae9-af2f-ca134dbd0577",
    region: "au-syd",
    serviceInstanceID: "f09894d0-ccb4-4359-8e01-abd531155b81",

    onLoad: async (instance:any) => {
      // Render the web chat.
      await instance.render();
      
      // Register to listen for the "receive" event.
      instance.on({ type: 'receive', handler: (event: any, instance: any) => {
        console.log('I received a message!', event.data);
      }});
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

  return (
    <div>
      {/* Optionally, you can add a container or placeholder for the chat window */}
    </div>
  );
};
export default WatsonAssistant;