import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF, useAnimations, PresentationControls } from '@react-three/drei';

import Loader from './Loader';

const ModelCanvas = () => {
  const Model = () => {
    const model = useGLTF('../../../3dmodels/trexc.glb');

    const { ref, actions } = useAnimations(model.animations);

    useEffect(() => {
      actions?.['roar']?.play();
    }, [actions]);

    return (
      <mesh ref={ref}>
        <primitive object={model.scene} scale={3.5} position={[0, -2, 0]} rotation={[0.1, 2, 0.1]} />
      </mesh>
    );
  };

  return (
    <div className="h-[25rem]">
      <Canvas shadows>
        <Loader />
        <Suspense fallback={<Loader />}>
          <PresentationControls snap global rotation={[0.15, 6.2, 0.1]} polar={[0, Math.PI / 2]}>
          <hemisphereLight intensity={4} groundColor="black" />
          <pointLight intensity={2} />
          <Model />
          </PresentationControls>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}

export default ModelCanvas;