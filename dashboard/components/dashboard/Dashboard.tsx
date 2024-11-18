'use client';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Dashboard() {
  const [chartData, setChartData] = useState(null);

  // Fetch blog post data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
          throw new Error('Failed to fetch blog data');
        }

        const data = await response.json();

        // Simulate blog post dates for the last 7 days
        const recentPosts = data.slice(0, 50).map((post, index) => ({
          date: new Date(Date.now() - (index % 7) * 24 * 60 * 60 * 1000).toLocaleDateString(),
          title: post.title,
        }));

        // Count posts per day
        const postCountByDate = recentPosts.reduce((acc, post) => {
          acc[post.date] = (acc[post.date] || 0) + 1;
          return acc;
        }, {});

        // Prepare chart data
        const dates = Object.keys(postCountByDate).sort((a, b) => new Date(a) - new Date(b));
        const counts = dates.map((date) => postCountByDate[date]);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: 'Posts Published',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching blog data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-6 pb-10 pt-12">
      <h1 className="text-3xl font-bold mb-6">Published Post Per Day</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        {chartData ? (
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Dates',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Number of Posts',
                  },
                  beginAtZero: true,
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


