import signinsteamlogo from '../assets/sits_02.png'

export const SteamLoginButton = () => {
    const steamLoginUrl = `https://steamcommunity.com/openid/login?` + new URLSearchParams({
      'openid.ns': 'http://specs.openid.net/auth/2.0',
      'openid.mode': 'checkid_setup',
      'openid.return_to': `${window.location.origin}/auth/steam/callback`,
      'openid.realm': `${window.location.origin}`,
      'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
      'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
    }).toString();
  
    return (
      <button
        onClick={() => (window.location.href = steamLoginUrl)}
        className="flex items-center gap-2 bg-black text-white p-2 rounded hover:opacity-80"
      >
        <img src={signinsteamlogo} alt="Steam" className="h-6" />
        {/* Sign in with Steam */}
      </button>
    );
  };
  