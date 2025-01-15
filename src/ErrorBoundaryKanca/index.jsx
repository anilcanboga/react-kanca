import React, { Component } from 'react'

export class ErrorBoundaryKanca extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Hata meydana geldiğinde state'i güncelle
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Error log kaydetme işlemleri burada yapılabilir
    console.error('Hata:', error, info)
  }

  render() {
    if (this.state.hasError) {
      // Hata durumunda gösterilecek mesaj
      const fallback = this.props.fallback
      if (typeof fallback === 'function') {
        return fallback() // Eğer bir fonksiyon ise çağır
      }
      return (
        <div>
          {fallback ||
            'Bir hata meydana geldi. Lütfen daha sonra tekrar deneyin.'}
        </div>
      ) // Varsayılan mesaj
    }

    return this.props.children // Normal durumda children componenti render edilecek
  }
}
