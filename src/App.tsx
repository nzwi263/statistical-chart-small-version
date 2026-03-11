import { StatisticalChart, type BenchmarkData } from './components';

// Sample benchmark data for MRR (Monthly Recurring Revenue)
const sampleData: BenchmarkData = {
  min: 45.2,      // Q1 - 1.5 * IQR
  q1: 65.2,       // 25th percentile
  median: 82.7,   // 50th percentile
  q3: 98.4,       // 75th percentile
  max: 118.1,     // Q3 + 1.5 * IQR
  mean: 82.7,     // Center of the bell curve
  standardDev: 15.2,  // For calculating the curve height
  userValue: 95.0  // User's value to display on the chart
};

function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-[1080px] w-full space-y-8">
        {/* Example 1: Live badge */}
        <StatisticalChart
          data={sampleData}
          width={530}
          height={370}
          title="Gross Margin"
          description="Profitability benchmark (%)"
          badgeType="live"
          badgeText="Live"
        />

        {/* Example 2: Top badge */}
        <StatisticalChart
          data={sampleData}
          width={530}
          height={370}
          title="Gross Margin"
          description="Profitability benchmark (%)"
          badgeType="top"
          badgeText="Top 10%"
        />

        {/* Example 3: Bottom badge */}
        <StatisticalChart
          data={sampleData}
          width={530}
          height={370}
          title="Gross Margin"
          description="Profitability benchmark (%)"
          badgeType="bottom"
          badgeText="Bottom 50%"
        />
      </div>
    </div>
  );
}

export default App;
