// src/app/ticket-success/page.tsx
export default function TicketSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Ticket Purchased!
        </h1>

        <p className="text-gray-300 mb-6">
          Thank you for your purchase! Your ticket confirmation has been sent to
          your email.
        </p>

        <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
          <p className="text-green-400 text-sm">
            📧 Check your email for ticket details and QR code
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-left">
            <h3 className="text-white font-semibold mb-2">Event Details:</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>📅 November 14-15, 2025</p>
              <p>🏢 Famecast, Santa Monica</p>
              <p>🕘 10:00 AM Daily</p>
            </div>
          </div>

          {/* <div className="pt-4">
            <a href="/#about"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Back to Festival Info
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
