import { XRPackageEngine, XRPackage } from '../xrpackage.js';
const pe = new XRPackageEngine();
document.body.appendChild(pe.domElement);

{
  const res = await fetch('./cube/Cube.wbn');
  const arrayBuffer = await res.arrayBuffer();
  const p = new XRPackage(new Uint8Array(arrayBuffer));
  pe.add(p);
}

pe.defaultAvatar();
