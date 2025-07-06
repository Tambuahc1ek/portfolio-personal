'use client';

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Delvira Ramadhanty',
    role: 'Partner & Support System',
    feedback:
      'Fachri adalah sosok yang tekun dan penuh dedikasi. Ia selalu menyelesaikan setiap tugas dengan sepenuh hati dan hasilnya memuaskan.',
  },
  {
    name: 'Bootcamp Instructor',
    role: 'Purwadhika',
    feedback:
      'Fachri menunjukkan perkembangan signifikan selama mengikuti program. Konsistensinya dalam belajar sangat patut diacungi jempol.',
  },
  {
    name: 'Client Produk Lokal',
    role: 'Owner Clothing Brand',
    feedback:
      'Foto produk yang dihasilkan sangat estetik dan sesuai brief. Komunikasi dan proses editing juga cepat.',
  },
];

export default function TestimonialsPage() {
  return (
     <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-10">
          Words from people I've worked with on various projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
            <p className="text-gray-700 italic mb-4">
              “Fachri is a reliable and talented developer. His attention to detail and dedication made our project a success.”
            </p>
            <div className="font-semibold">Sarah Johnson</div>
            <div className="text-sm text-gray-500">Project Manager at ABC Corp</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left">
            <p className="text-gray-700 italic mb-4">
              “Working with Fachri was a great experience. He communicates well and delivers quality code on time.”
            </p>
            <div className="font-semibold">Michael Tan</div>
            <div className="text-sm text-gray-500">Lead Engineer at DevHouse</div>
          </div>
        </div>
      </div>
    </section>
  );
}
