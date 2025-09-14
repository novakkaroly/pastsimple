
import React from 'react';
import { Header } from './components/Header';
import { GrammarSection } from './components/GrammarSection';
import { ExampleBox } from './components/ExampleBox';
import { PracticeSection } from './components/PracticeSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-12">

          <GrammarSection title="1. The Past Simple Tense">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We use the Past Simple to talk about actions that started and finished in the past. It's for completed actions.
            </p>
            <h3 className="font-semibold text-xl text-slate-800 mb-2">How to form it:</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              For regular verbs, we add <strong className="font-bold text-indigo-600">-ed</strong>. For irregular verbs, we use the second form (e.g., go → went, see → saw).
            </p>
            <ExampleBox>
              <ul className="space-y-3">
                <li><strong className="text-green-700">(+)</strong> I <strong className="font-bold">watched</strong> a movie yesterday.</li>
                <li><strong className="text-red-700">(-)</strong> She <strong className="font-bold">did not (didn't) play</strong> tennis last week.</li>
                <li><strong className="text-blue-700">(?)</strong> <strong className="font-bold">Did</strong> you <strong className="font-bold">visit</strong> London?</li>
              </ul>
            </ExampleBox>
          </GrammarSection>

          <GrammarSection title="2. The Past Continuous Tense">
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We use the Past Continuous to talk about actions that were in progress at a specific time in the past. The action was not finished.
            </p>
            <h3 className="font-semibold text-xl text-slate-800 mb-2">How to form it:</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We use <strong className="font-bold text-indigo-600">was/were + verb-ing</strong>.
            </p>
            <ExampleBox>
              <ul className="space-y-3">
                 <li><strong className="text-green-700">(+)</strong> I <strong className="font-bold">was studying</strong> at 8 PM last night.</li>
                 <li><strong className="text-red-700">(-)</strong> They <strong className="font-bold">were not (weren't) sleeping</strong> when I arrived.</li>
                 <li><strong className="text-blue-700">(?)</strong> <strong className="font-bold">Was</strong> he <strong className="font-bold">working</strong> at 10 AM?</li>
              </ul>
            </ExampleBox>
          </GrammarSection>

          <GrammarSection title="3. Past Simple vs. Past Continuous">
             <p className="text-lg text-slate-700 leading-relaxed mb-4">
              We often use these two tenses together. The Past Continuous describes the longer, "background" action. The Past Simple describes the shorter action that happened in the middle of the longer action.
            </p>
             <div className="text-center my-4 p-4 bg-slate-100 rounded-lg">
                <p className="text-lg">Long Action (Past Continuous)</p>
                <div className="w-full h-1 bg-indigo-300 my-2 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                       <span className="text-xs text-white">X</span>
                    </div>
                </div>
                <p className="text-lg text-red-600 font-semibold">Short Action (Past Simple)</p>
            </div>
            <ExampleBox>
               <p className="text-lg leading-relaxed">
                  I <strong className="text-indigo-600">was watching TV</strong> <strong className="font-bold">when</strong> the phone <strong className="text-red-600">rang</strong>.
               </p>
               <p className="text-sm text-slate-500 mt-2">(Long action: watching TV. Short, interrupting action: the phone rang.)</p>
            </ExampleBox>
            <ExampleBox>
               <p className="text-lg leading-relaxed">
                  <strong className="font-bold">While</strong> they <strong className="text-indigo-600">were playing football</strong>, it <strong className="text-red-600">started</strong> to rain.
               </p>
               <p className="text-sm text-slate-500 mt-2">(Long action: playing football. Short action that happened during: it started to rain.)</p>
            </ExampleBox>
          </GrammarSection>
          
          <PracticeSection />

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
