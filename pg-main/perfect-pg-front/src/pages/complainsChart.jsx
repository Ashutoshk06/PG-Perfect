import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';


import axiosInstance from '../helper/axiosInstance';

const ComplaintsChart = () => {
    const [summary, setSummary] = useState({});
    const [propertySummary, setPropertySummary] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [complaintsDetails, setComplaintsDetails] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchComplaintsData = async () => {
      try {
        const response = await axiosInstance.get('/helper/complainSummery');
        setSummary(response.data.data);
      } catch (error) {
        console.error('Error fetching complaints data:', error);
      }
    };

    const fetchComplaintsDataByProperty = async () => {
      try {
        const response = await axiosInstance.get('/helper/complainSummeryByProperty');
        setPropertySummary(response.data.data);
      } catch (error) {
        console.error('Error fetching complaints data by property:', error);
      }
    };

    fetchComplaintsData();
    fetchComplaintsDataByProperty();
  }, []);

  const pieData = {
    labels: ['Cleaning', 'Food', 'Maintenance', 'Noise', 'Other'],
    datasets: [
    {
    data: [
    summary.cleaning || 0,
    summary.food || 0,
    summary.maintenance || 0,
    summary.noise || 0,
    summary.other || 0,
    ],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
    },
    ],
    };
    
    return (
    <div>
    <h2>Complaints by Category</h2>
    <div className='flex h-[300px] w-[300px]'>
    <Pie data={pieData} />
    </div>
    <h2>Complaints by Property</h2>
    <div className='flex flex-wrap justify-center gap-4'>
    {propertySummary.map((property) => (
    <div key={property.property}>
    <h3>{property.name}</h3>
    
    <Pie 
    data={{
    labels: ['Cleaning', 'Food', 'Maintenance', 'Noise', 'Other'],
    datasets: [
    {
    data: [
    property.cleaning || 0,
    property.food || 0,
    property.maintenance || 0,
    property.noise || 0,
    property.other || 0,
    ],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB'],
    },
    ],
    }}
    />
    </div>
    
    ))}
    </div>
    </div>
    );
    };

export default ComplaintsChart;

