import React from 'react';

const skills = [
    { language: 'HTML', percentage: 95 },
    { language: 'CSS', percentage: 85 },
    { language: 'Javascript', percentage: 70 },
    { language: 'PHP', percentage: 60 },
    { language: 'Bootstrap', percentage: 100 },
];

export default function Skills() {
    return (
        <section id="skills" className="grid place-content-center h-auto py-32 bg-white-900">
            {skills.map((skill) => (
                <div className="flex gap-10 skill" key={skill.language}>
                    <p>{skill.language}</p>
                    <div className="progress-bar w-80">
                        <div className="progress" style={{ width: `${skill.percentage}%` }}>
                            <span>{skill.percentage}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}