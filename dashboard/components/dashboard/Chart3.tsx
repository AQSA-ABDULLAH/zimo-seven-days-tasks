'use client';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export default function DashboardChart3() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();

        // Count posts by user
        const postCountByUser = data.reduce((acc, post) => {
          acc[post.userId] = (acc[post.userId] || 0) + 1;
          return acc;
        }, {});

        // Prepare chart data
        const users = Object.keys(postCountByUser).map((userId) => `User ${userId}`);
        const postCounts = Object.values(postCountByUser);

        setChartData({
          labels: users,
          datasets: [
            {
              label: 'Posts Per User',
              data: postCounts,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(201, 203, 207, 0.6)',
                'rgba(100, 149, 237, 0.6)',
                'rgba(46, 204, 113, 0.6)',
                'rgba(241, 196, 15, 0.6)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(100, 149, 237, 1)',
                'rgba(46, 204, 113, 1)',
                'rgba(241, 196, 15, 1)',
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-xl bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-8">Read Posts By Every User</h1>
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-16">
        {chartData ? (
          <Pie
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      const value = chartData.datasets[0].data[tooltipItem.dataIndex];
                      return `${chartData.labels[tooltipItem.dataIndex]}: ${value} posts`;
                    },
                  },
                },
              },
            }}
          />
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}
