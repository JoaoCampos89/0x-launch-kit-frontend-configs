# 0x-launch-kit-frontend-configs
In this repo are all changes and configs for 0xBitcoin Exchange built on the top of 0x Project's template.

See http://dex.0xchange.org:3002/#/erc20/?base=xbc&quote=dai


# Workflow
1. Create a new directory like `md june_16_2019` and `cd june_16_2019`
2. `git clone https://github.com/0xProject/0x-launch-kit-frontend.git`
3. `cd 0x-launch-kit-frontend` + `yarn` (prerequisites are `node.js 10.x+` and `yarn`)
4. Change the port in line 35 of `package.json` to a port you want to use (line `"start": "cross-env PORT=8080 react-scripts start",`). Make sure that ufw allows that port if it was not used before (`ufw allow 8080`).
5. See that the 0x Project version (step 2) works by launching it. Use `REACT_APP_RELAYER` launch script (see bottom)
6. Download this repo ("0x-launch-kit-frontend-configs") to your local hard drive (Green "Clone or Download" button + "Download Zip") and extract
7. Use secure file transfer like FileZilla to access the new base repo ("target" in right) in server (steps 1-3 above) and unzipped files on your disk (step 6, "source" in left)
8. Copy all the extracted files from your hard drive over the ones on the server using FileZilla
9. See that the system is visible in `http://[your-ip/url]:[your port]`
10. If everything works, change the port (4 above) to production, close down the old frontend `CTRL + C`, and restart the new one

Note that you can skip the hard disk part if you know how to do this properly on the server!

Launch script that uses our open backend:
`REACT_APP_RELAYER_URL='http://relay.0xchange.org:3001/v2/' yarn start`

See that everything works:
`http://138.197.135.82:3002/#/erc20/?base=xbc&quote=dai` (check http/s, ip and port)


