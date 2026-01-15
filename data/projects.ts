export interface Project {
  id: string;
  title: string;
  description: string;
  approach: string;  // One paragraph summary
  tags: string[];
  github?: string;
  demo?: string;
  category: 'robotics' | 'ml' | 'apps';
}

export const projects: Project[] = [
  {
    id: 'dual-arm-manipulation',
    title: 'Dual-Arm Pick-and-Place System',
    description: 'Robot manipulation system with RRR and RPR configurations using ROS2',
    approach: 'Implemented forward/inverse kinematics, motion planning, and ROS2 integration for synchronized arm control. Achieved smooth trajectory planning with collision avoidance in Gazebo simulation.',
    tags: ['ROS2', 'Python', 'Kinematics', 'Motion Planning', 'Gazebo'],
    github: 'https://github.com/yourusername/dual-arm-manipulation',
    category: 'robotics'
  },
  // Add more projects here
];