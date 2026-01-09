import Link from 'next/link';

export const metadata = {
  title: 'School Calendar - Manas International Public School',
  description: 'View the academic calendar, events, and important dates at Manas International Public School.',
};

export default function CalendarPage() {
  const events = [
    { date: 'January 1', event: 'New Year Holiday', type: 'holiday' },
    { date: 'January 6', event: 'School Reopens', type: 'academic' },
    { date: 'January 26', event: 'Republic Day', type: 'holiday' },
    { date: 'February 15', event: 'Annual Sports Day', type: 'event' },
    { date: 'March 1-15', event: 'Annual Examinations', type: 'exam' },
    { date: 'March 20', event: 'Result Declaration', type: 'academic' },
    { date: 'March 25', event: 'Holi Holiday', type: 'holiday' },
    { date: 'April 1', event: 'New Academic Session Begins', type: 'academic' },
    { date: 'April 14', event: 'Ambedkar Jayanti', type: 'holiday' },
    { date: 'May 1', event: 'Summer Vacation Begins', type: 'holiday' },
    { date: 'July 1', event: 'School Reopens', type: 'academic' },
    { date: 'August 15', event: 'Independence Day', type: 'holiday' },
    { date: 'September 5', event: 'Teachers Day Celebration', type: 'event' },
    { date: 'October 2', event: 'Gandhi Jayanti', type: 'holiday' },
    { date: 'October 15-25', event: 'Dussehra & Diwali Holidays', type: 'holiday' },
    { date: 'November 14', event: 'Children\'s Day Celebration', type: 'event' },
    { date: 'December 15', event: 'Annual Day Function', type: 'event' },
    { date: 'December 25', event: 'Christmas Holiday', type: 'holiday' },
    { date: 'December 31', event: 'Winter Break Begins', type: 'holiday' },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'holiday': return 'bg-[#C4A35A] text-white';
      case 'exam': return 'bg-[#8B1538] text-white';
      case 'event': return 'bg-[#0E2034] text-white';
      case 'academic': return 'bg-[#1a3a5c] text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>School Calendar</span>
        </div>
        <h1>School Calendar</h1>
        <p>Academic year 2025-26 important dates and events</p>
      </section>

      {/* Calendar Legend */}
      <section className="content-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#C4A35A]"></span>
              <span className="text-sm">Holidays</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#8B1538]"></span>
              <span className="text-sm">Examinations</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#0E2034]"></span>
              <span className="text-sm">Events</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-[#1a3a5c]"></span>
              <span className="text-sm">Academic</span>
            </span>
          </div>

          {/* Events List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 divide-y divide-gray-100">
              {events.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                    <span className="font-medium text-[#0E2034]">{item.event}</span>
                  </div>
                  <span className="text-[#7F8588] text-sm">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="content-section alt">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl mb-4">Download Full Calendar</h2>
          <p className="text-[#4a4a4a] mb-8">
            Get the complete academic calendar with all important dates, exam schedules, and events.
          </p>
          <a href="#" className="btn btn-primary">
            Download PDF Calendar
          </a>
        </div>
      </section>
    </>
  );
}
