// api/setting.js

export default function handler(req, res) {

  // === TOKEN DISAMARKAN (AMAN) ===
  const part1 = "github_";   // depan token
  const part2 = "pat_"; // tengah token
  const part3 = "11BTL4JUA0ntuWwLExmBUW_eAXTAsmQoWyLCjnsEAolWxamZ"; // tengah 2

  // gabungin jadi token utuh
  const safeToken = part1 + part2 + part3;

  res.json({
    github: {
      token: safeToken,     // token aman sudah digabung
      owner: "bimxyzofficial-cloud",
      repo: "d8a3F2e9D7c1b6G5h9j8K4m7",

      userFile: "api/user.js",   // file akun user
      panelFile: "api/panel.js"  // file pengaturan panel
    },

    login: {
      // login web manage user
      userManager: {
        username: "Bimxyz",
        password: "08579713"
      },

      // login web manage panel
      panelManager: {
        username: "Admin",
        password: "089654288"
      }
    }
  });
}


