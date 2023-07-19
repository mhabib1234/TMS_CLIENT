import React, { useEffect, useState } from "react";
import ClassroomCard from "../../components/ClassroomCard";
import bg1 from '../../assets/images/bg/bg1.jpg';
import bg2 from '../../assets/images/bg/bg2.jpg';

const Classroom = () => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await fetch("http://localhost:9080/classroom/get", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        // Map the classroom data and set the image based on classroom ID
        const mappedClassrooms = data.Classroom.map((classroom) => ({
          id: classroom.id,
          name: classroom.name,
          image: classroom.id === 1 ? bg1 : bg2,
        }));

        setClassrooms(mappedClassrooms);
      } catch (error) {
        console.error("Failed to fetch classrooms:", error);
      }
    };

    fetchClassrooms();
  }, []);

  return (
    <div>
      <h1>Classrooms</h1>
      <ClassroomCard classrooms={classrooms} />
    </div>
  );
};

export default Classroom;
