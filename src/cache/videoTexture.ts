import { Dash_VideoClip } from "./videoClip"

declare const Map: any

class Dash_VideoTexture_Instance {
    private videoTextures: typeof Map = new Map()
    // private videoTextures: Map<string, VideoTexture> = new Map()

    create(src: string): VideoTexture {
        if(this.videoTextures.has(src)) return this.videoTextures.get(src)!
        const clip = Dash_VideoClip.create(src)
        const videoTexture = new VideoTexture(clip)
        this.videoTextures.set(src, videoTexture)
        return videoTexture
    }
}

export const Dash_VideoTexture = new Dash_VideoTexture_Instance()
