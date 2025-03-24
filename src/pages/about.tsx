import headshot from '@/assets/images/headshot.png';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import moment from 'moment';

const dateOfBirth = '1997-12-03';

export default function About() {
    const age = moment(Date.now()).diff(dateOfBirth, 'years');

    return (
        <section className="w-full h-full flex justify-between items-end">
            <div className="flex-1 h-full flex flex-col justify-center items-start">
                <div className="h-[30%] w-full">
                    <img
                        src={headshot}
                        alt="Chikondi Kamwendo"
                        className="h-full w-full object-contain object-right -scale-x-100"
                    />
                </div>

                <div className="w-full">
                    <h2 className="text-5xl mt-3">
                        <span className="font-semibold">Chikondi</span>
                        <br />
                        Kamwendo
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        {age} years of age - he/him
                    </p>

                    <p className="text-muted-foreground">Malawian</p>

                    <div className="mt-6">
                        <p className="tracking-wide max-w-md">
                            Diligent fullstack developer with 4 years of
                            experience. Eager to contribute to the improvement
                            of lives. Skilled in back-end and front-end
                            development.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-1 h-full flex flex-col justify-end items-start">
                <div className="min-h-1/2">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Is it accessible?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
