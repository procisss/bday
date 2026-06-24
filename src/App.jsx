import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Camera, Video } from 'lucide-react'
import './index.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  // You can easily edit this content later!
  const letterContent = {
    greeting: "Happy Birthday BFF!!",
    body: `I wanted to make you something for your day. Something that is kinda special, but idk what, so I just vibe coded you this instead. \n\nEven though I can't give it to you physically and be there for you, I hope it makes you happy. I'm so lucky to have you as my BFF premium++. \n\nThank you kay ni chat ka balik sakoa on a random day hahah. Thank you for bearing with my countless rants, reklamo, sending reels, and being there when I don't know what to do. \n\nI wish you the best and more birthdays to come because magkita pa ta, be it davao, kaamulan, cdo, japan HAHAHAHA. \n\nI hope your day is as pretty as you are. Enjoy the rest of your day ATE, BFF, YAH. No "nega" thoughts dapat, especially sa decision nimo past week nga magpa color sa hair and its not going the way you wanted hahahahah. \n\n HAPPY 22nd BIRTHDAY MY KIAH!!!`,
    signature: "jojo,"
  };

  const Envelope = () => (
    <motion.div 
      className="envelope-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      onClick={() => setIsOpen(true)}
    >
      <motion.div 
        className="envelope"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="envelope-flap"></div>
        <div className="envelope-bottom"></div>
        <motion.div 
          className="envelope-heart"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Heart fill="currentColor" size={32} />
        </motion.div>
      </motion.div>
      <div className="envelope-text">Tap to open</div>
    </motion.div>
  );

  const Content = () => (
    <motion.div 
      className="app-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="content-section">
        {/* Letter Section */}
        <motion.div 
          className="letter-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="letter-greeting serif">{letterContent.greeting}</h1>
          <p className="letter-body">{letterContent.body}</p>
          <p className="letter-signature">{letterContent.signature}</p>
        </motion.div>

        {/* Photos Section */}
        <motion.div 
          className="photos-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="photos-title serif">Pics nimo HAHAHAHA</h2>
          <div className="photos-grid">
            <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/IMG_20220916_225019_673.webp" alt="Memory 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/IMG_20220916_225049_101.webp" alt="Memory 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/86af24cd-3da0-4588-a563-2c5ac2406c63.jpg" alt="Memory 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="photo-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <img src="/photo_6143141837607210896_y.jpg" alt="Memory 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="video-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="video-title serif">Greetings</h2>
          <div className="video-container">
            <video src="/2632373d-f8d2-467f-a742-483c6a42424f.mp4" controls playsInline />
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <p>Made with <Heart size={14} style={{ display: 'inline', color: 'var(--color-pink-accent)'}} fill="currentColor" /> for you.</p>
      </footer>
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {!isOpen ? <Envelope key="envelope" /> : <Content key="content" />}
    </AnimatePresence>
  )
}

export default App
