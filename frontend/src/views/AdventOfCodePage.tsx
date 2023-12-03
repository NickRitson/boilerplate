import React from 'react';

import CodeBlock from '../components/codeblock/CodeBlock';

const AdventOfCodePage: React.FC = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold mb-4">Advent of Code</h1>
            <div className="flex">
                <div className="w-1/2">
                    <div className="container mx-auto p-4 pt-0">
                        <div className="flex items-start pb-4">
                            <div>
                                <h3>Day 1 Challenge</h3>
                                <small>On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.</small>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <CodeBlock />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 border border-slate-800">
                    <div className="flex items-center pb-4">
                        <div>
                            <p>Day 1 Challenge Part 2</p>
                            <small>some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits"</small>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <CodeBlock />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdventOfCodePage;
