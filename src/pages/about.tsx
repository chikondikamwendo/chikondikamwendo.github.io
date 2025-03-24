import headshot from '@/assets/images/headshot.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import moment from 'moment';

const dateOfBirth = '1997-12-03';

export default function About() {
    const age = moment(Date.now()).diff(dateOfBirth, 'years');

    return (
        <section className="flex h-full w-full items-end justify-between">
            <div className="flex h-full flex-1 flex-col items-start justify-center">
                <div className="h-[30%] w-full">
                    <img src={headshot} alt="Chikondi Kamwendo" className="h-full w-full -scale-x-100 object-contain object-right" />
                </div>

                <div className="w-full">
                    <h2 className="mt-3 text-5xl">
                        <span className="font-semibold">Chikondi</span>
                        <br />
                        Kamwendo
                    </h2>

                    <p className="text-muted-foreground mt-2">{age} years of age - he/him</p>

                    <p className="text-muted-foreground">Malawian</p>

                    <div className="mt-6">
                        <p className="max-w-md tracking-wide">
                            Diligent fullstack developer with 4 years of experience. Eager to contribute to the improvement of lives. Skilled in
                            back-end and front-end development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex h-full flex-1 flex-col items-start justify-end">
                <div className="min-h-1/2 w-full">
                    <Accordion type="single" collapsible defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Education</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Professional Experience</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Skills & Proficincies</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Fluent Languages</AccordionTrigger>
                            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
