import React from 'react';

const skills = [
    { language: 'HTML', percentage: 95 },
    { language: 'CSS', percentage: 85 },
    { language: 'Javascript', percentage: 50 },
    { language: 'Python', percentage: 40 },
    { language: 'Bootstrap/Tailwind', percentage: 80 },
    { language: 'React', percentage: 50 },
    { language: 'DevOps', percentage: 50 },
    { language: 'Git/Github', percentage: 50 },
];

export default function Skills() {
    return (
        <section id="skills" className="grid place-content-center sm:px-5 h-auto py-32 bg-white-900">
            {skills.map((skill) => (
                <div className="flex gap-2 skill" key={skill.language}>
                    <p className='flex-1'>{skill.language}</p>
                    <div className="progress-bar flex-1 w-72">
                        <div className="progress" style={{ width: `${skill.percentage}%` }}>
                            <span>{skill.percentage}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}