'use client';

export default function IdCard() {
  return (
    <div className="id-card-wrapper">
      <div className="id-card-clip" />
      <div className="id-card">
        <div className="id-card-photo-frame">
          <img
            src="/headshot.jpg"
            alt="Evelyn Swanson"
            className="id-card-photo"
          />
        </div>
        <div className="id-card-body">
          <p className="id-card-name">Evelyn Swanson</p>
          <div className="id-card-info">
            <div className="id-card-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M0 0h16v16H0z" fill="none" />
                <path fill="currentColor" fillRule="evenodd" d="M9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5M5 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m4.5 2.5H12A1.5 1.5 0 0 1 13.5 7v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V7A1.5 1.5 0 0 1 4 5.5zM4.75 7a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clipRule="evenodd" />
              </svg>
              <span>User Experience Designer</span>
            </div>
            <div className="id-card-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M0 0h16v16H0z" fill="none" />
                <path fill="currentColor" fillRule="evenodd" d="M6.836 3.202L1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202M1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.9 1.9 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447" clipRule="evenodd" />
              </svg>
              <span>Savannah College of Art and Design</span>
            </div>
            <div className="id-card-row">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M0 0h16v16H0z" fill="none" />
                <path fill="currentColor" fillRule="evenodd" d="M3.125 7a4.875 4.875 0 1 1 9.75 0c0 1.864-.774 2.962-1.687 3.815c-.385.36-.765.65-1.17.958l-.365.28a9 9 0 0 0-.781.668c-.243.24-.535.575-.73 1.01a.34.34 0 0 1-.095.132l-.015.008s-.01.004-.032.004l-.032-.003l-.015-.009a.34.34 0 0 1-.095-.131a3.4 3.4 0 0 0-.73-1.01a9 9 0 0 0-.781-.668q-.187-.145-.366-.28a15 15 0 0 1-1.169-.96C3.9 9.963 3.125 8.865 3.125 7M14.5 7c0 3.4-2.066 4.975-3.53 6.091c-.634.485-1.156.882-1.345 1.305C9.355 15 8.788 15.5 8 15.5s-1.354-.5-1.625-1.104c-.19-.423-.71-.82-1.346-1.305C3.566 11.975 1.5 10.399 1.5 7a6.5 6.5 0 0 1 13 0m-5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clipRule="evenodd" />
              </svg>
              <span>Austin, TX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
