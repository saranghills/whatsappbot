import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatsAppGroupSelector() {
  const [selection, setSelection] = useState(null);

  const options = {
    start: {
      text: "What are you interested in?",
      choices: [
        { text: "Study Tours", next: "study_tours" },
        { text: "Camps", next: "camps" },
        { text: "Weekly Huddles", next: "huddles" },
      ],
    },
    study_tours: {
      text: "Join our 'About Educational Trips' group for updates on study tours!",
      link: "https://chat.whatsapp.com/your-study-tours-link",
    },
    camps: {
      text: "Join our WhatsApp Community for all major announcements, including camps!",
      link: "https://chat.whatsapp.com/your-community-link",
    },
    huddles: {
      text: "We have zonal groups for weekly huddles. Select your region:",
      choices: [
        { text: "North Kerala (Koyilandi)", next: "north" },
        { text: "Central Kerala (Angamaly)", next: "central" },
        { text: "South Kerala (Trivandrum)", next: "south" },
      ],
    },
    north: {
      text: "Join the 'Walking Ferns North Kerala' group here:",
      link: "https://chat.whatsapp.com/your-north-link",
    },
    central: {
      text: "Join the 'Walking Ferns Central Kerala' group here:",
      link: "https://chat.whatsapp.com/your-central-link",
    },
    south: {
      text: "Join the 'Walking Ferns South Kerala' group here:",
      link: "https://chat.whatsapp.com/your-south-link",
    },
  };

  return (
    <div className="flex flex-col items-center p-6">
      <Card className="w-full max-w-md p-4">
        <CardContent>
          <p className="text-lg font-semibold text-center">
            {selection ? options[selection].text : options.start.text}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {selection && options[selection].link ? (
              <a
                href={options[selection].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 underline"
              >
                Join Group
              </a>
            ) : (
              (selection ? options[selection].choices : options.start.choices).map((choice) => (
                <Button
                  key={choice.text}
                  onClick={() => setSelection(choice.next)}
                  className="w-full"
                >
                  {choice.text}
                </Button>
              ))
            )}
            {selection && (
              <Button
                onClick={() => setSelection(null)}
                variant="outline"
                className="w-full mt-2"
              >
                Start Over
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
