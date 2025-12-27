import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics"
      description="An AI-native textbook on embodied intelligence and humanoid robotics"
    >
      <main style={{ padding: '4rem', maxWidth: '900px', margin: 'auto' }}>
        <h1>Physical AI & Humanoid Robotics</h1>

        <p>
          This textbook introduces <strong>Physical AI</strong> — artificial
          intelligence systems embodied in the physical world.
        </p>

        <p>
          Students will learn how intelligent agents perceive, reason, and act
          through humanoid robots using ROS 2, simulation environments, and
          modern AI models.
        </p>

        <h2>What You Will Learn</h2>
        <ul>
          <li>Embodied intelligence and Physical AI principles</li>
          <li>ROS 2 for humanoid robot control</li>
          <li>Simulation using Gazebo and NVIDIA Isaac</li>
          <li>Vision-Language-Action systems</li>
          <li>Conversational humanoid robots</li>
        </ul>

        <h2>Start Learning</h2>
        <p>
          Use the sidebar to begin with <strong>Module 1: Foundations of Physical AI</strong>.
        </p>
      </main>
    </Layout>
  );
}

